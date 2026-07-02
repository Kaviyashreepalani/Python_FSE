from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager
import time


driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install())
)

wait = WebDriverWait(driver, 10)

try:
    # =========================
    # TASK 1: LOCATOR STRATEGIES
    # =========================

    driver.get("https://www.lambdatest.com/selenium-playground/simple-form-demo")

    print("===== TASK 1: LOCATOR STRATEGIES =====")

    # By.ID
    driver.find_element(By.ID, "user-message")
    print("✓ By.ID works")

    # By.NAME
    try:
        driver.find_element(By.NAME, "user-message")
        print("✓ By.NAME works")
    except:
        print("✗ By.NAME not available on this page")

    # By.CLASS_NAME
    driver.find_element(By.CLASS_NAME, "form-control")
    print("✓ By.CLASS_NAME works")

    # By.TAG_NAME
    driver.find_element(By.TAG_NAME, "input")
    print("✓ By.TAG_NAME works")

    # Absolute XPath
    try:
        driver.find_element(
            By.XPATH,
            "/html/body/div[1]/section[2]/div/div/div[1]/div/div[2]/div/input"
        )
        print("✓ Absolute XPath works")
    except:
        print("✗ Absolute XPath may vary with page structure")

    # Relative XPath
    driver.find_element(
        By.XPATH,
        "//input[@id='user-message']"
    )
    print("✓ Relative XPath works")

    print("\n===== CSS SELECTORS =====")

    # CSS by ID
    driver.find_element(By.CSS_SELECTOR, "#user-message")
    print("✓ CSS by ID works")

    # CSS by attribute
    driver.find_element(
        By.CSS_SELECTOR,
        "input[id='user-message']"
    )
    print("✓ CSS by attribute works")

    # CSS parent-child
    try:
        driver.find_element(
            By.CSS_SELECTOR,
            ".form-group input"
        )
        print("✓ CSS parent-child works")
    except:
        print("✗ Parent-child selector may vary")

    # Ranking of locators:
    #
    # 1. ID
    # 2. Name
    # 3. CSS Selector
    # 4. Class Name
    # 5. Relative XPath
    # 6. Absolute XPath
    #
    # ID is most preferred because it is unique and fast.
    # Absolute XPath is least preferred because
    # small HTML changes break the locator.

    # =========================
    # CHECKBOX DEMO
    # =========================

    print("\n===== CHECKBOX DEMO =====")

    driver.get(
        "https://www.lambdatest.com/selenium-playground/checkbox-demo"
    )

    try:
        option1 = driver.find_element(
            By.XPATH,
            "//label[contains(text(),'Option 1')]"
        )
        print("XPath text():", option1.text)
    except:
        print("Option 1 label not found")

    options = driver.find_elements(
        By.XPATH,
        "//label[contains(text(),'Option')]"
    )

    print("\nLabels found using contains():")

    for option in options:
        print(option.text)

    # =========================
    # TASK 2: EXPLICIT WAITS
    # =========================

    print("\n===== TASK 2: EXPLICIT WAITS =====")

    driver.get(
        "https://www.lambdatest.com/selenium-playground/bootstrap-alert-messages-demo"
    )

    # -------- time.sleep() --------

    start_sleep = time.time()

    button = driver.find_element(
        By.ID,
        "autoclosable-btn-success"
    )

    button.click()

    time.sleep(3)

    alert_text = driver.find_element(
        By.CSS_SELECTOR,
        ".alert-autocloseable-success"
    ).text

    end_sleep = time.time()

    print("\nUsing time.sleep()")
    print("Alert:", alert_text)
    print("Time Taken:", round(end_sleep - start_sleep, 2), "seconds")

    # -------- Explicit Wait --------

    driver.refresh()

    start_wait = time.time()

    clickable_button = wait.until(
        EC.element_to_be_clickable(
            (By.ID, "autoclosable-btn-success")
        )
    )

    clickable_button.click()

    alert = wait.until(
        EC.visibility_of_element_located(
            (By.CSS_SELECTOR, ".alert-autocloseable-success")
        )
    )

    assert "successfully" in alert.text.lower()

    end_wait = time.time()

    print("\nUsing Explicit Wait")
    print("Alert:", alert.text)
    print("Time Taken:", round(end_wait - start_wait, 2), "seconds")

    # visibility_of_element_located:
    # Element is visible in the DOM.
    #
    # element_to_be_clickable:
    # Element is visible, enabled,
    # and can actually be clicked.

    # =========================
    # FLUENT WAIT
    # =========================

    print("\n===== FLUENT WAIT =====")

    driver.get(
        "https://www.lambdatest.com/selenium-playground/table-sort-search-demo"
    )

    fluent_wait = WebDriverWait(
        driver,
        timeout=10,
        poll_frequency=0.5,
        ignored_exceptions=[NoSuchElementException]
    )

    row = fluent_wait.until(
        lambda d: d.find_element(
            By.CSS_SELECTOR,
            "tbody tr"
        )
    )

    print("First Table Row:")
    print(row.text)

finally:
    driver.quit()