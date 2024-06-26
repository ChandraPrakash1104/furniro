"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const productRoutes_1 = __importDefault(require("./productRoutes"));
const cartRoutes_1 = __importDefault(require("./cartRoutes"));
const wishlistRoutes_1 = __importDefault(require("./wishlistRoutes"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.use('/user', userRoutes_1.default);
router.use('/product', productRoutes_1.default);
router.use('/cart', auth_1.default, cartRoutes_1.default);
router.use('/wishlist', auth_1.default, wishlistRoutes_1.default);
exports.default = router;
