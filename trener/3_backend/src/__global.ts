import "express";

declare global {
  namespace Express {
    // These open interfaces may be extended in an application-specific manner via declaration merging.
    // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
    interface Request {
      user: User;
    }
    interface Response {}
    interface Locals {}
    interface Application {}
  }

  namespace NodeJS {
    interface ProcessEnv {
      HOST?: string;
      PORT?: string;
    }
  }
}

declare module "express-session" {
  interface SessionData {
    views: number;
    user: User;
  }
}

interface User {
  name: string;
}

const user: User = { name: "123" };
