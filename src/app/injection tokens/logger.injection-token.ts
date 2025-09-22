import { InjectionToken } from "@angular/core";
import { LoggerService } from "../services/logger.service";

export const LOGGER_TOKEN = new InjectionToken<LoggerService[]>("LOGGER_TOKEN");
