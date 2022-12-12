const express = require('express');
const {
    httpGetNotifications,
    httpFindNotificationWithId,
    httpCreateNewNotification,
    httpUpdateNotification,
    httpDeleteNotification
} = require('../controllers/notification.controller');

const notificationRouter = express.Router();

notificationRouter.get('/', httpGetNotifications);
notificationRouter.get('/:id', httpFindNotificationWithId);
notificationRouter.post('/', httpCreateNewNotification);
notificationRouter.put('/:id', httpUpdateNotification);
notificationRouter.delete('/:id', httpDeleteNotification);

module.exports = notificationRouter;