import { AuthorizationWindow, Board, Field } from "../../components";
import { append, render } from "../../core";
import { UserController } from "../../schemas";

export class Application {
  private app: HTMLElement;
  private authorizationWindow: AuthorizationWindow;
  private userController: UserController;
  private board: Board;

  constructor() {
    this.app = document.getElementById("app");

    this.authorizationWindow = new AuthorizationWindow(this.getSendEvents());

    this.userController = new UserController();

    this.board = new Board();
  }

  private getSendEvents() {
    return {
      click: async () => {
        const isValid = this.userController.authorize(
          this.authorizationWindow.getLoginInput().value,
          this.authorizationWindow.getPasswordInput().value
        );

        await this.getToken(isValid);

        if (isValid) {
          this.authorizationWindow.success();

          this.launchApp();
        } else {
          this.authorizationWindow.error();
        }
      },
    };
  }

  private async getToken(isValid: boolean) {
    const response = await fetch("http://localhost:3000/authorize", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ isValid: isValid }),
    });

    const parsedData = await response.json();

    console.log(`Token: ${parsedData.accessToken}`);
  }

  private launchApp() {
    render(this.app, this.board.getComponent());

    this.setFirstStep();
  }

  setFirstStep() {
    const first = this.board.getFields()[43];
    const second = this.board.getFields()[35];
    const initial = this.board.getFields()[51];

    this.setFieldsListener([first, second], initial);
  }

  setFieldsListener(fields: Field[], initial: Field) {
    fields.forEach((field) => {
      field.active();

      field.getComponent().addEventListener("click", () => {
        fields.forEach((field) => {
          field.reset();
        });

        field.setFigure(initial.removeFigure());
      });
    });
  }

  run() {
    append(this.app, this.authorizationWindow.getComponent());
  }
}
