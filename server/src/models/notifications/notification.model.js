const mongoose = require('mongoose');
const Notification = require('./notification.mongo');

async function getAllNotifications(skip, limit) {
    return await Notification
        .find()
        .sort({ createdAt: 'desc' })
        // .skip(skip)
        // .limit(limit)
        .catch(err => null);
}

async function findNotifications(filter) {
    return await Notification.find(filter)
        .catch(err => null);
}

async function findNotificationWithId(notificationId) {
    return await Notification.findById(notificationId)
        .catch(err => null);
}

async function getNotificationsOfUser(userId) { // find notifications
    return await findNotifications({ userId });
}

async function getNewNotifications() { // socket
    return await findNotifications(
        { userId: { $exists: false } }
    );
}

async function createNewNotification(notification) {
    const newNotification = {
        userId: mongoose.Types.ObjectId(notification.userId),
        title: notification.title,
        content: notification.content,
        image: notification.image,
        link: notification.link,
        type: notification.type
    }

    return await Notification.create(newNotification)
        .catch(err => null);
}

async function updateNotification(notification, notificationId) {
    const newNotification = {
        userId: mongoose.Types.ObjectId(notification.userId),
        title: notification.title,
        content: notification.content,
        image: notification.image,
        link: notification.link,
        type: notification.type
    }

    return await Notification.updateOne(
        { _id: notificationId },
        newNotification
    ).catch(err => null);
}

async function deleteNotification(notificationId) {
    return await Notification.remove({ _id: notificationId })
        .catch(err => null);
}

module.exports = {
    getAllNotifications,
    findNotificationWithId,
    getNotificationsOfUser, // notification create for user
    getNewNotifications, // notification of system
    createNewNotification,
    updateNotification,
    deleteNotification
}