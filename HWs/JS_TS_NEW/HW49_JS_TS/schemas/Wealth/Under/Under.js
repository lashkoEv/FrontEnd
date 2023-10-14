import { Wealth } from "../..";

// LSP (substitutable for parent)
// OCP (extending the parent class)
export class Under extends Wealth {
  constructor() {
    super();
  }
}
