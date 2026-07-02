"""
Hands-On 4 - Task 1: Selenium Architecture and Environment Setup

Selenium Components:

1. WebDriver:
   WebDriver is the main component used to automate browsers.
   It communicates with the browser through browser-specific drivers
   such as ChromeDriver.

2. Selenium Grid:
   Selenium Grid allows tests to run in parallel on multiple machines,
   browsers, and operating systems, reducing execution time.

3. Selenium IDE:
   Selenium IDE is a record-and-playback tool that helps beginners
   create automation scripts and generate code quickly.
"""

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


# Headless mode
options = webdriver.ChromeOptions()
options.add_argument("--headless")

driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()),
    options=options
)

# Implicit wait (not recommended globally because it affects all elements
# and can make debugging difficult. Explicit waits are more flexible.)
driver.implicitly_wait(10)

driver.get("https://www.lambdatest.com/selenium-playground/")

print("Page Title:", driver.title)

driver.quit()