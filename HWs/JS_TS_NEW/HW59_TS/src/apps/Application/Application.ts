import { Card, ModalWindow, Spinner } from "../../components";
import { Component, render } from "../../core";
import { Product, ProductController } from "../../schemas";

export class Application {
  private productController: ProductController;
  private spinner: Spinner;
  private modalWindow: ModalWindow;
  private currentProduct: Product | null;
  private app: HTMLElement;
  private toShow: HTMLElement[];
  private products: HTMLElement;

  constructor() {
    this.app = document.getElementById("app");

    this.products = new Component({ className: "products" }).getComponent();

    this.currentProduct = null;

    this.productController = new ProductController();
    this.spinner = new Spinner();
    this.modalWindow = new ModalWindow(this.getApplyEvents());
  }

  private getCards(products: Product[]) {
    this.toShow = [];

    products.forEach((product) => {
      this.toShow.push(
        new Card(product, this.getCardEvents(product)).getComponent()
      );
    });
  }

  private getCardEvents(product: Product) {
    return {
      dblclick: () => {
        this.currentProduct = product;
        
        this.modalWindow.getTitleInput().value = product.getTitle();
        this.modalWindow.getDescriptionInput().value = product.getDescription();
        this.modalWindow.getPriceInput().value = product.getPrice();
        this.modalWindow.getUrlInput().value = product.getImageUrl();

        this.modalWindow.changeVisibility();
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

  private setDisplayedProducts() {
    this.getCards(this.productController.getAll());

    render(this.products, this.toShow);
  }

  run() {
    this.setDisplayedProducts();
    this.app.append(this.products);
    this.app.append(this.modalWindow.getComponent());
  }
}
