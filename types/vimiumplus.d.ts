type voidFunc = (...args: any[]) => void;
type voidFuncNoEnv = (this: void) => void;
type BOOL = 0 | 1;
type Dict<T> = {
  [key: string]: T
};

declare function setInterval<T1, T2, T3>(handler: (a1: T1, a2: T2, a3: T3) => void, timeout: number, a1: T1, a2: T2, a3: T3): number;
declare function setInterval<T1, T2>(handler: (a1: T1, a2: T2) => void, timeout: number, a1: T1, a2: T2): number;
declare function setInterval<T1>(handler: (a1: T1) => void, timeout: number, a1: T1): number;
declare function setInterval(handler: () => void, timeout: number): number;
declare function setTimeout <T1, T2, T3>(handler: (a1: T1, a2: T2, a3: T3) => void, timeout: number, a1: T1, a2: T2, a3: T3): number;
declare function setTimeout <T1, T2>(handler: (a1: T1, a2: T2) => void, timeout: number, a1: T1, a2: T2): number;
declare function setTimeout <T1>(handler: (a1: T1) => void, timeout: number, a1: T1): number;
declare function setTimeout (handler: () => void, timeout: number): number;

interface String {
  endsWith(searchString: string): boolean;
  startsWith(searchString: string): boolean;
}