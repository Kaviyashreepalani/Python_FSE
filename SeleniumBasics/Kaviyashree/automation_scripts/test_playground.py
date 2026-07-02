import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC


# =====================================
# Task 45: Parameterized Form Test
# =====================================

@pytest.mark.parametrize(
    "message",
    ["Hello", "Selenium Automation", "12345"]
)
def test_simple_form_submission(driver, base_url, message):

    driver.get(base_url + "simple-form-demo")

    message_box = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "user-message"))
    )

    message_box.clear()
    message_box.send_keys(message)

    driver.find_element(By.ID, "showInput").click()

    output = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "message"))
    )

    assert output.text == message


# =====================================
# Task 43: Checkbox Demo Test
# =====================================

def test_checkbox_demo(driver, base_url):

    driver.get(base_url + "checkbox-demo")

    checkbox = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable(
            (By.XPATH, "//input[@type='checkbox']")
        )
    )

    checkbox.click()

    assert checkbox.is_selected()

    checkbox.click()

    assert not checkbox.is_selected()


# =====================================
# Task 49: Dropdown Selection Test
# =====================================

def test_dropdown_selection(driver, base_url):

    driver.get(base_url + "select-dropdown-demo")

    dropdown = Select(
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located(
                (By.ID, "select-demo")
            )
        )
    )

    dropdown.select_by_visible_text("Wednesday")

    selected_day = dropdown.first_selected_option.text

    assert selected_day == "Wednesday"