 ## Backend Server Mini Map
 This is the project structure for backend. this shows were all controller, route and model are located.
```
Server Backend Mini Map:.
│   app.ts
│
├───config
│       DB.ts
│
├───controllers
│   ├───mikroTik
│   │       mikroTikController.ts
│   │
│   ├───package
│   │       packageController.ts
│   │
│   ├───reseller
│   │       resellerBalanceController.ts
│   │       resellerController.ts
│   │       resellerUserController.ts
│   │
│   └───user
│           userController.ts
│
├───middleware
│       authenticationMiddleware.ts
│       authorizeUserByRoleMiddleware.ts
│
├───model
│       Client.ts
│       MikroTik.ts
│       Package.ts
│       Reseller.ts
│       ResellerBalanceRechargeLog.ts
│       ResellerHasPackage.ts
│       ResellerUser.ts
│       User.ts
│
├───routes
│       mikroTikRoutes.ts
│       packageRoutes.ts
│       resellerRoutes.ts
│       userRoutes.ts
│
├───seeders
│       mainSeeder.ts
│       userSeeder.ts
│
└───types
        ClientType.ts
        MikroTikType.ts
        modifiedRequest.ts
        PackageType.ts
        ResellerBalanceRechargeLogType.ts
        ResellerType.ts
        UserType.ts
```