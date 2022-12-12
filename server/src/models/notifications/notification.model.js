const Notification = require('./notification.mongo');

async function getAllNotifications(skip, limit) {
    
}

async function findNotifications(filter) {

}

async function findNotificationWithId(notificationId) {

}

async function getNotificationsOfUser(userId) { // find notifications

}

async function getNewNotifications() { // find notifications

}

async function createNewNotification(notification) {

}

async function updateNotification(notification, notificationId) {

}

async function deleteNotification(notificationId) {

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