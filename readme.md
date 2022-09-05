# Zen Billing For ISP
## Description
This software is one of my personal project. Through this software, an ISP can manage customers and do billing-related work. 

With this software, an ISP will be able to manage all its customers and if a client does not pay their bill in a month, their internet connection will be automatically shut down by this billing software. Again if the customer pays his internet bills then his internet connection will be activated automatically by this software.

This software will have various other features that can be used by internet service providers to manage their clients and this software will work with Mikrotik through API.
 
 ### Skills Utilized In This Project
 ![My Skills](https://skillicons.dev/icons?i=nodejs,ts,express,mysql,react&perline=6)
 
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
