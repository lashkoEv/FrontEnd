import {
  AuthorizationWindow,
  Button,
  Card,
  ModalWindow,
  Spinner,
} from "../../components";
import { Component, append, render } from "../../core";
import { UserType } from "../../enums";
import {
  Product,
  ProductController,
  User,
  UserController,
} from "../../schemas";

export class Application {
  private productController: ProductController;
  private currentProduct: Product | null;

  private userController: UserController;
  private currentUser: User | undefined;

  private app: HTMLElement;

  private toShow: HTMLElement[];

  private spinner: Spinner;
  private modalWindow: ModalWindow;
  private authorizationWindow: AuthorizationWindow;
  private products: HTMLElement;
  private paginationWrapper: HTMLElement;

  private maxCount: number;
  private currentPage: number;

  constructor() {
    this.userController = new UserController();

    this.currentUser = undefined;

    this.maxCount = 10;

    this.currentPage = 1;

    this.paginationWrapper = document.createElement("div");
    this.paginationWrapper.className = "pagination-wrapper";

    this.app = document.getElementById("app");

    this.products = new Component({ className: "products" }).getComponent();

    this.currentProduct = null;

    this.productController = new ProductController();

    this.spinner = new Spinner();

    this.modalWindow = new ModalWindow(
      this.getApplyEvents(),
      this.getDeleteEvents(),
      this.getAddEvents()
    );

    this.authorizationWindow = new AuthorizationWindow(this.getSendEvents());
  }

  getSendEvents() {
    return {
      click: () => {
        this.currentUser = this.userController.authorize(
          this.authorizationWindow.getLoginInput().value,
          this.authorizationWindow.getPasswordInput().value
        );

        if (this.currentUser) {
          this.authorizationWindow.success();

          this.app.append(this.spinner.getComponent());

          setTimeout(() => {
            this.launchApp();
          }, 2000);
        } else {
          this.authorizationWindow.error();
        }
      },
    };
  }

  private getCards(products: Product[]) {
    this.toShow = [];

    products.forEach((product) => {
      this.toShow.push(
        new Card(product, this.getCardEvents(product)).getComponent()
      );
    });
  }

  private setDisplayedProducts() {
    this.getPagination();

    this.getCards(
      this.productController.getFromPage(this.currentPage, this.maxCount)
    );

    render(this.products, this.toShow);
  }

  private getPagination() {
    const count = Math.ceil(
      this.productController.getAll().length / this.maxCount
    );

    const buttons = [];

    for (let i = 1; i <= count; i++) {
      buttons.push(
        new Button({
          textContent: i.toString(),
          events: {
            click: () => {
              this.currentPage = i;
              this.setDisplayedProducts();
            },
          },
        }).getComponent()
      );
    }

    render(this.paginationWrapper, buttons);
  }

  private getCardEvents(product: Product) {
    return {
      dblclick: () => {
        if (this.currentUser?.getUserType() === UserType.Admin) {
          this.currentProduct = product;

          this.modalWindow.getTitleInput().value = product.getTitle();
          this.modalWindow.getDescriptionInput().value =
            product.getDescription();
          this.modalWindow.getPriceInput().value = product.getPrice();
          this.modalWindow.getUrlInput().value = product.getImageUrl();

          this.modalWindow.changeVisibility();
        }
      },
    };
  }

  private getApplyEvents() {
    return {
      click: () => {
        if (this.currentProduct) {
          this.productController.update(
            this.currentProduct,
            this.modalWindow.getTitleInput().value,
            this.modalWindow.getDescriptionInput().value,
            this.modalWindow.getPriceInput().value,
            this.modalWindow.getUrlInput().value
          );

          this.setDisplayedProducts();
        }

        this.modalWindow.changeVisibility();
      },
    };
  }

  private getDeleteEvents() {
    return {
      click: () => {
        if (this.currentProduct) {
          this.productController.delete(this.currentProduct);
          this.setDisplayedProducts();
        }

        this.modalWindow.changeVisibility();
      },
    };
  }

  private getAddEvents() {
    return {
      click: () => {
        this.productController.add(
          this.modalWindow.getTitleInput().value,
          this.modalWindow.getDescriptionInput().value,
          this.modalWindow.getPriceInput().value,
          this.modalWindow.getUrlInput().value
        );

        this.setDisplayedProducts();

        this.modalWindow.changeVisibility();
      },
    };
  }

  private launchApp() {
    this.setDisplayedProducts();

    render(this.app, this.products);

    this.app.append(this.paginationWrapper);

    this.app.append(this.modalWindow.getComponent());
  }

  run() {
    this.app.append(this.authorizationWindow.getComponent());
  }
}
