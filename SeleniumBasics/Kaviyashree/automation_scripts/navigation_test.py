from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install())
)

driver.maximize_window()

try:
    # Open Selenium Playground
    driver.get("https://www.lambdatest.com/selenium-playground/")

    # Click Simple Form Demo
    simple_form = driver.find_element(
        By.LINK_TEXT,
        "Simple Form Demo"
    )

    simple_form.click()

    # Verify URL
    assert "simple-form-demo" in driver.current_url
    print("URL verification passed")

    # Navigate back
    driver.back()

    # Open a new tab
    driver.execute_script(
        'window.open("https://www.google.com");'
    )

    # Display all window handles
    print("Window Handles:", driver.window_handles)

    # Switch to Google tab
    driver.switch_to.window(driver.window_handles[1])

    print("Google Title:", driver.title)

    # Switch back to Playground
    driver.switch_to.window(driver.window_handles[0])

    # Take screenshot
    driver.save_screenshot("playground_screenshot.png")

    print("Screenshot saved successfully")

    # Get window size
    print("Current Window Size:")
    print(driver.get_window_size())

    # Set fixed window size
    driver.set_window_size(1280, 800)

    # Consistent window size is important because responsive web
    # pages may change layout on different screen sizes.
    print("Updated Window Size:")
    print(driver.get_window_size())

finally:
    driver.quit()