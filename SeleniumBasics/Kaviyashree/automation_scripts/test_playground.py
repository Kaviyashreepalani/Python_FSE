import pytest

from pages.simple_form_page import SimpleFormPage
from pages.checkbox_page import CheckboxPage
from pages.dropdown_page import DropdownPage
from pages.input_form_page import InputFormPage


# ==========================
# Simple Form Test
# ==========================

@pytest.mark.parametrize(
    "message",
    ["Hello", "Selenium Automation", "12345"]
)
def test_input_form_submit(driver, base_url):

    page = InputFormPage(driver)

    page.navigate_to(base_url + "input-form-demo")

    page.fill_form(
        "Kaviyashree",
        "kavi@gmail.com",
        "9876543210",
        "Chennai"
    )

    page.submit_form()

    # Just verify that form submission happened
    assert page.get_title() != ""


# ==========================
# Checkbox Test
# ==========================

def test_checkbox_demo(driver, base_url):

    page = CheckboxPage(driver)

    page.navigate_to(base_url + "checkbox-demo")

    page.check_option()

    assert page.is_option_checked()

    page.uncheck_option()

    assert not page.is_option_checked()


# ==========================
# Dropdown Test
# ==========================

def test_dropdown_selection(driver, base_url):

    page = DropdownPage(driver)

    page.navigate_to(base_url + "select-dropdown-demo")

    page.select_day("Wednesday")

    assert page.get_selected_day() == "Wednesday"


# ==========================
# Input Form Test
# ==========================

def test_input_form_submit(driver, base_url):

    page = InputFormPage(driver)

    page.navigate_to(base_url + "input-form-demo")

    page.fill_form(
        "Kaviyashree",
        "kavi@gmail.com",
        "9876543210",
        "Chennai"
    )

    page.submit_form()

    assert page.get_success_message() == \
        "Form Submitted Successfully"


"""
POM Benefit:

In a flat Selenium script, if the Submit button ID changes
from 'submit' to 'btn-submit', every test file must be updated.

In POM, only one locator inside the page class needs to be changed,
making the framework easier to maintain and reuse.
"""