import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from ".";

describe ("Counter Component ", () => {
    test("Deve iniciar o titulo com o valor 0", () => {
        render(<Counter />);


        const CounterTitle = screen.getByText("0");

        expect(CounterTitle).toBeInTheDocument();

    });
    test("Deve conter a classe counter__title no titulo", () => {
        render(<Counter/>);


        const CounterTitle = screen.getByText("0");


        expect(CounterTitle).toHaveClass("counter__title");

    });
    test("Nao deve iniciar os titulos com as classes counter__title--increment e counter__title--decrement", () => {
        render(<Counter/>);


        const CounterTitle = screen.getByText("0");

        expect(CounterTitle).not.toHaveClass("counter__title--increment");
        expect(CounterTitle).not.toHaveClass("counter__title--decrement");


    });
    test("Deve conter um botão incrementar", () => {
        render(<Counter/>);


        const buttonIncrement = screen.getByRole("button", {name: /incrementar/i});
        expect(buttonIncrement).toBeInTheDocument();
    });

    test("Deve conter um botão incrementar com as 2 classes", () => {
        render(<Counter/>);


        const buttonIncrement = screen.getByRole("button", {
            name: /incrementar/i,
        });
        expect(buttonIncrement).toHaveClass("button");
        expect(buttonIncrement).toHaveClass("button--increment");
    });

    test("Deve conter um botão decrementar", () => {
        render(<Counter/>);


        const buttonDecrement = screen.getByRole("button", {name: /decrementar/i});
        expect(buttonDecrement).toBeInTheDocument();
    });

    test("Deve conter um botão decrementar com as 2 classes", () => {
        render(<Counter />);


        const buttonDecrement = screen.getByRole("button", {name: /decrementar/i});
        expect(buttonDecrement).toHaveClass("button");
        expect(buttonDecrement).toHaveClass("button--decrement");

    });

    test("Deve incrementar +1 ao clicar em incrementar", () => {
        render(<Counter />);
        const buttonIncrement = screen.getByRole("button", {
            name: /incrementar/i,
        });

        expect(screen.queryByText("1")).toBeNull();
        userEvent.click(buttonIncrement);
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    test("Deve decrementar -1 ao clicar em decrementar", () => {
        render(<Counter/>);
        const buttonDecrement = screen.getByRole("button", {name: /decrementar/i});

        expect(screen.queryByText("-1")).toBeNull();
        userEvent.click(buttonDecrement);
        expect(screen.getByText("-1")).toBeInTheDocument();
     });

     test("deve adicionar a classe counter__title--decrement no tituto, quando o valor for menor que 0", () => {
        render(<Counter/>);

        const buttonDecrement = screen.getByRole("button", {
            name: /decrementar/i,
        });

        expect(screen.queryByText("0")).not.toHaveClass(
            "counter__title--decrement"
        );
        userEvent.click(buttonDecrement);
        expect(screen.getByText("-1")).toHaveClass(
            "counter__title--decrement"
        );
     });



});
