const {
    getAllNotifications, 
    findNotificationWithId,
    getNotificationsOfUser,
    getNewNotifications, // filter
    createNewNotification,
    updateNotification,
    deleteNotification
} = require('../models/notifications/notification.model');

async function httpGetNotifications (req, res) {
    const notifications = await getAllNotifications();
    if(notifications) {
        return res.status(200).json(notifications);
    }
    return res.status(404).json({ error: "Not found any notification!" });
}

async function httpGetSystemNotifications (req, res) {
    const notifications = await getNewNotifications();
    if(notifications) {
        return res.status(200).json(notifications);
    }
    return res.status(404).json({ error: "Not found any notification!" });
}

async function httpFindNotificationWithId (req, res) {
    const notificationId = req.params.id;
    const notification = await findNotificationWithId(notificationId);

    if(notification) {
        return res.status(200).json(notification);
    }
    return res.status(404).json({ error: "Not found notification with id=" + notificationId });
}

async function httpGetNotificationsOfUser (req, res) {
    const userId =  req.params.id;
    const notifications = await getNotificationsOfUser(userId);
    
    if(notifications) {
        return res.status(200).json(notifications);
    }
    return res.status(404).json({ error: "Not found any notification!" });
}

async function httpCreateNewNotification (req, res) {
    const newNotification = {
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        link: req.body.link,
        type: req.body.type
    };

    const result = await createNewNotification(newNotification);
    if(result) {
        return res.status(201).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpUpdateNotification (req, res) {
    const notificationId = req.params.id;
    const notification = await findNotificationWithId(notificationId);

    if(!notification) {
        return res.status(404).json({ error: "Not found any notification!" });
    }

    const newNotification = {
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        link: req.body.link,
        type: req.body.type
    };

    const result = await updateNotification(newNotification, notificationId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpDeleteNotification (req, res) {
    const notificationId = req.params.id;
    const notification = await findNotificationWithId(notificationId);

    if(!notification) {
        return res.status(404).json({ error: "Not found any notification!" });
    }

    const result = await deleteNotification(notificationId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Cannot delete this notifycation!" });
}

module.exports = {
    httpGetNotifications,
    httpGetSystemNotifications,
    httpFindNotificationWithId,
    httpGetNotificationsOfUser,
    httpCreateNewNotification,
    httpUpdateNotification,
    httpDeleteNotification
};