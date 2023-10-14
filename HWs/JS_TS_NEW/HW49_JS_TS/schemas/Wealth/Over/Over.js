import { Wealth } from "../..";

// LSP (substitutable for parent)
// OCP (extending the parent class)
export class Over extends Wealth {
  constructor() {
    super();
  }
}
