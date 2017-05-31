import { Injectable } from '@angular/core';

/**
 * AngularJS Service to store items into a (local or session) Storage in a generic way.
 * By default, this service will log onto the `SessionStorage` with a timeout of `Infinity`.
 *
 * In your component, you can use the service as follows:
 *
 * ```
 * import { StorageService } from 'app/core/storage.service';
 * constructor(
 *   private storageService: StorageService<MyTypeHere>
 * ) {}
 * ```
 *
 * You can change default params by using
 * [factory-providers](https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#factory-providers)
 * in your module setup.
 *
 * Example:
 * ```
 * providers: [
 *   {
 *     provide: StorageService,
 *     useFactory: () => new StorageService(sessionStorage, 15)
 *   }
 * ]
 * ```
 */
@Injectable()
export class StorageService<T> {

  /**
   *
   * @param [storage] sessionStorage the storage use
   * @param [timeoutSecs] Infinity the timeout in seconds
   */
  constructor(private storage: Storage = sessionStorage, private timeoutSecs: number = Infinity) {}

  get(key: string): T | null {
    const resultJson = this.storage.getItem(key);
    if (resultJson) {
      const item: StorageItem<T> = JSON.parse(resultJson);
      if (this.validate(item)) {
        return item.data;
      } else {
        // not valid anymore, no need to keep in in storage
        this.remove(key);
      }
    }
    return null;
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  set(key: string, data: T): void {
    const item = this.createItem(data);
    this.storage.setItem(key, JSON.stringify(item));
  }

  /**
   * Create a new StorageItem with a timestamp
   */
  private createItem(data: T): StorageItem<T> {
    return new StorageItem(data, new Date().getTime());
  }

  /**
   * Validates the timeout for the item
   */
  private validate(item: StorageItem<T>): boolean {
    if (this.timeoutSecs === Infinity) { return true; }
    const validUntil = new Date().getTime() + this.timeoutSecs * 1000;
    return item.timestamp - validUntil > 0;
  }
}

/**
 * Internal class to store items with a timestamp for timeout purposes
 */
class StorageItem<T> {
  constructor(public readonly data: T, public readonly timestamp: number) {}
}
