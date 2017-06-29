import { Injectable } from '@angular/core';
/**
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/notification
 */
@Injectable()
export class DesktopnotificationsService {

  private icon: string;

  constructor() { }

  setDefaultIcon(iconPath: string): void {
    this.icon = iconPath;
  }

  isSupported(): boolean {
    return 'Notification' in window;
  }

  checkHasPermission(): boolean {
    return this.getPermission() === 'granted';
  }

  private getPermission(): string {
    /* tslint:disable no-any */
    return (Notification as any).permission;
    /* tslint:enable no-any */
  }

  requestPermission(callback?: NotificationPermissionCallback): void {
    Notification.requestPermission(callback);
  }

  create(message: string, title: string = '', iconPath?: string): Notification {
    if (this.isSupported) {
      if (this.getPermission() === 'granted') {
        return this.createNotification(message, title, iconPath);
      } else if (this.getPermission() !== 'denied') {
        this.requestPermission((permission) => {
          return this.createNotification(message, title, iconPath);
        });
      } else {
        console.log('Desktop notifications has been denied');
      }
    }
  }

  private createNotification(message: string, title?: string, iconPath?: string): Notification {
    const notification = new Notification(title, {body: message, icon: iconPath ? iconPath : this.icon});

    return notification;
  }
}
