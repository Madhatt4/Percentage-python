import calculator


def display_result(total, percentage, result):
    # Display the calculation result in the console.
    print(f"{percentage}% of {total} is {result:.2f}")


def main():
    # This is the 'test' application.
    print("Welcome to the 'test' application.")
    
    test_cases = [
        (100, 10),
        (250, 50),
        (75, 25),
    ]

    for total, percentage in test_cases:
        result = calculator.calculate_percentage(total, percentage)
        display_result(total, percentage, result)

if __name__ == "__main__":
    main()