"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Wrapper = styled_components_1.default.div(({ theme: { device: { isMobile, isIpad, isDesktop }, }, }) => `
  display:flex;
  flex-direction:column;
  gap: 10px;
  min-width: 250px;
  width:  '100%' ;
`);
