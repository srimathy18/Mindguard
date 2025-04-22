
import express from "express";
import { getChatbotResults ,getChatbotInsights,getChatbotVisualInsights,getUserTrends,getRiskAnalysis,getUserRiskAlerts} from "../controllers/chatbotController.js";
import userAuth from "../middlewares/auth.js";

const router = express.Router();

router.get("/results", userAuth, getChatbotResults);
router.get("/insights", userAuth, getChatbotInsights);
router.get("/insights/visual", userAuth, getChatbotVisualInsights);
router.get("/trends", userAuth, getUserTrends);
router.get("/risk-alerts", userAuth, getRiskAnalysis);         // High risk only
router.get("/risk-alerts/all", userAuth, getUserRiskAlerts);   // All risk levels




export default router;
