const mongoose = require('mongoose');
const Course = require('../models/Course');
const Order = require('../models/Order');
const User = require('../models/User');

class AnalyticsService {
    // Get overall platform statistics
    async getPlatformStats() {
        try {
            const totalUsers = await User.countDocuments();
            const totalCourses = await Course.countDocuments();
            const totalOrders = await Order.countDocuments();
            const totalRevenue = await Order.aggregate([
                { $match: { status: 'completed' } },
                { $group: { _id: null, total: { $sum: '$amount' } } }
            ]);

            return {
                totalUsers,
                totalCourses,
                totalOrders,
                totalRevenue: totalRevenue[0]?.total || 0
            };
        } catch (error) {
            throw new Error('Error getting platform stats');
        }
    }

    // Get sales analytics
    async getSalesAnalytics(period = 'monthly') {
        try {
            const currentDate = new Date();
            let dateFormat;
            let matchStage;

            switch(period) {
                case 'daily':
                    dateFormat = { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } };
                    matchStage = {
                        createdAt: {
                            $gte: new Date(currentDate.setDate(currentDate.getDate() - 30))
                        }
                    };
                    break;
                case 'monthly':
                    dateFormat = { $dateToString: { format: '%Y-%m', date: '$createdAt' } };
                    matchStage = {
                        createdAt: {
                            $gte: new Date(currentDate.setMonth(currentDate.getMonth() - 12))
                        }
                    };
                    break;
                case 'yearly':
                    dateFormat = { $dateToString: { format: '%Y', date: '$createdAt' } };
                    matchStage = {
                        createdAt: {
                            $gte: new Date(currentDate.setFullYear(currentDate.getFullYear() - 5))
                        }
                    };
                    break;
            }

            const salesData = await Order.aggregate([
                { $match: { ...matchStage, status: 'completed' } },
                {
                    $group: {
                        _id: dateFormat,
                        revenue: { $sum: '$amount' },
                        orders: { $sum: 1 }
                    }
                },
                { $sort: { _id: 1 } }
            ]);

            return salesData;
        } catch (error) {
            throw new Error('Error getting sales analytics');
        }
    }

    // Get course analytics
    async getCourseAnalytics() {
        try {
            const courseStats = await Course.aggregate([
                {
                    $lookup: {
                        from: 'orders',
                        localField: '_id',
                        foreignField: 'courseId',
                        as: 'orders'
                    }
                },
                {
                    $project: {
                        title: 1,
                        enrollments: { $size: '$orders' },
                        rating: 1,
                        revenue: {
                            $reduce: {
                                input: '$orders',
                                initialValue: 0,
                                in: { $add: ['$$value', '$$this.amount'] }
                            }
                        }
                    }
                },
                { $sort: { enrollments: -1 } }
            ]);

            return courseStats;
        } catch (error) {
            throw new Error('Error getting course analytics');
        }
    }

    // Get user engagement metrics
    async getUserEngagementMetrics() {
        try {
            const userMetrics = await User.aggregate([
                {
                    $lookup: {
                        from: 'orders',
                        localField: '_id',
                        foreignField: 'userId',
                        as: 'purchases'
                    }
                },
                {
                    $group: {
                        _id: {
                            $dateToString: { format: '%Y-%m', date: '$createdAt' }
                        },
                        newUsers: { $sum: 1 },
                        activeUsers: {
                            $sum: {
                                $cond: [{ $gt: [{ $size: '$purchases' }, 0] }, 1, 0]
                            }
                        }
                    }
                },
                { $sort: { _id: 1 } }
            ]);

            return userMetrics;
        } catch (error) {
            throw new Error('Error getting user engagement metrics');
        }
    }

    // Get payment method analytics
    async getPaymentMethodAnalytics() {
        try {
            const paymentStats = await Order.aggregate([
                { $match: { status: 'completed' } },
                {
                    $group: {
                        _id: '$paymentMethod',
                        count: { $sum: 1 },
                        totalAmount: { $sum: '$amount' }
                    }
                }
            ]);

            return paymentStats;
        } catch (error) {
            throw new Error('Error getting payment method analytics');
        }
    }
}

module.exports = new AnalyticsService();
