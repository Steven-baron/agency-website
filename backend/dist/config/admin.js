"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', '7e09929cad9e0227d4af4402891b0920'),
    },
});
