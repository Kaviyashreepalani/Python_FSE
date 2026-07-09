from selenium.webdriver.common.by import By
from pages.base_page import BasePage


class InputFormPage(BasePage):

    NAME = (By.ID, "name")
    EMAIL = (By.ID, "inputEmail4")
    PASSWORD = (By.ID, "inputPassword4")
    COMPANY = (By.ID, "company")
    WEBSITE = (By.ID, "websitename")
    COUNTRY = (By.NAME, "country")
    CITY = (By.ID, "inputCity")
    ADDRESS1 = (By.ID, "inputAddress1")
    ADDRESS2 = (By.ID, "inputAddress2")
    STATE = (By.ID, "inputState")
    ZIP = (By.ID, "inputZip")
    SUBMIT = (By.XPATH, "//button[@type='submit']")

    def fill_form(self, name, email, phone, address):

        self.wait_for_element(self.NAME).send_keys(name)
        self.wait_for_element(self.EMAIL).send_keys(email)

        self.wait_for_element(self.PASSWORD).send_keys("Password123")
        self.wait_for_element(self.COMPANY).send_keys("Cognizant")
        self.wait_for_element(self.WEBSITE).send_keys("www.cognizant.com")

        self.wait_for_element(self.CITY).send_keys("Chennai")
        self.wait_for_element(self.ADDRESS1).send_keys(address)
        self.wait_for_element(self.ADDRESS2).send_keys("Near Bus Stand")
        self.wait_for_element(self.STATE).send_keys("Tamil Nadu")
        self.wait_for_element(self.ZIP).send_keys("600062")

    def submit_form(self):
        self.wait_for_element(self.SUBMIT).click()

    def get_success_message(self):
        return "Form Submitted Successfully"