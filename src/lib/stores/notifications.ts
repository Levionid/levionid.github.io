import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';

export interface Notification {
	id: string;
	message: string;
	timeout: number;
}

const MAX_NOTIFICATIONS = 5;

export const notifications = writable<Notification[]>([]);

export function createNotification(message: string, timeout = 4000) {
	const newNotification: Notification = {
		id: uuid(),
		message,
		timeout
	};
	
	notifications.update((all) => {
		const updatedNotifications = [...all, newNotification];
		// Если уведомлений стало больше, чем MAX_NOTIFICATIONS,
		// берем только последние MAX_NOTIFICATIONS штук, отсекая самые старые.
		return updatedNotifications.slice(-MAX_NOTIFICATIONS);
	});
}

export function dismissNotification(id: string) {
	notifications.update((all) => all.filter((n) => n.id !== id));
}