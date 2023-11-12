import { ITrain, IResult } from "../interfaces";

export class App {
  #trains;

  constructor(trains: ITrain[]) {
    this.#trains = trains;
  }

  findByColor(color: string): IResult[] {
    const found: IResult[] = [];

    this.#trains.forEach((train) => {
      const carriages = train.carriages.filter(
        (carriage) => carriage.color === color
      );

      if (Array.isArray(carriages)) {
        carriages.forEach((carriage) => {
          found.push({
            name: train.driver,
            color: carriage.color,
            id: carriage.id,
          });
        });
      }
    });

    return found;
  }

  findById(id: number): IResult[] {
    const found: IResult[] = [];

    this.#trains.forEach((train) => {
      const carriages = train.carriages.filter(
        (carriage) => carriage.id === id
      );

      carriages.forEach((carriage) => {
        found.push({
          name: train.driver,
          color: carriage.color,
          id: carriage.id,
        });
      });
    });

    return found;
  }

  findByColorAndId(color: string, id: number): IResult[] {
    const found: IResult[] = [];

    this.#trains.forEach((train) => {
      const carriages = train.carriages.filter(
        (carriage) => carriage.id === id && carriage.color === color
      );

      carriages.forEach((carriage) => {
        found.push({
          name: train.driver,
          color: carriage.color,
          id: carriage.id,
        });
      });
    });

    return found;
  }
}
