import { Wealth } from "../..";

// LSP (substitutable for parent)
// OCP (extending the parent class)
export class Medium extends Wealth {
  constructor() {
    super();
  }
}
