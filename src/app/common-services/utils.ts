export type valueOf<T> = T[keyof T];

export const nameof = <T>(name: Extract<keyof T, string>): string => name;

export function nameOf<T, V extends T[keyof T]>(f: (x: T) => V): valueOf<{ [K in keyof T]: T[K] extends V ? K : never }>;

export function nameOf(f: (x: any) => any): keyof any {
    const p = new Proxy({}, {
        get: (_target, key) => key
    });
    return f(p);
}

export function hasOnlyDigits(value: string): boolean {
    if (value) {
        return value.match(/^[0-9]+$/) != null;
    }

    return true;
}
