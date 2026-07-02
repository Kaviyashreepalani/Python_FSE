import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


# =====================================
# Base URL Fixture
# =====================================

@pytest.fixture(scope="session")
def base_url():
    return "https://www.lambdatest.com/selenium-playground/"


# =====================================
# Driver Fixture
# =====================================

@pytest.fixture(scope="function")
def driver(request):

    options = webdriver.ChromeOptions()

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options
    )

    driver.maximize_window()
    driver.implicitly_wait(10)

    request.node.driver = driver

    yield driver

    driver.quit()


# =====================================
# Screenshot on Failure Hook
# =====================================

@pytest.hookimpl(hookwrapper=True)
def pytest_runtest_makereport(item, call):

    outcome = yield
    report = outcome.get_result()

    if report.when == "call" and report.failed:

        driver = getattr(item, "driver", None)

        if driver:
            screenshot_name = f"{item.name}_failure.png"
            driver.save_screenshot(screenshot_name)
            print(f"\nScreenshot saved: {screenshot_name}")