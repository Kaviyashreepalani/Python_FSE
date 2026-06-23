# Python Backend Frameworks - Hands-On 2

## Django Models, ORM & Admin Interface

This hands-on was implemented as a continuation of the Django project created in Hands-On 1.

### Tasks Completed

#### Task 1: Define Models and Run Migrations

* Created Department model
* Created Course model
* Created Student model
* Created Enrollment model
* Added ForeignKey relationships
* Added `__str__()` methods for all models
* Added `unique_together` constraint for Enrollment
* Generated migrations using `makemigrations`
* Applied migrations using `migrate`

#### Task 2: Django ORM Queries

* Created sample Department records
* Created sample Course records
* Created sample Student records
* Queried courses using ForeignKey lookups
* Used `annotate()` and `Count()` for aggregation
* Used `select_related()` for optimized queries
* Updated department budgets using `F()` expressions

#### Task 3: Django Admin Interface

* Registered all models in Django Admin
* Created superuser account
* Customized CourseAdmin with:

  * list_display
  * search_fields
  * list_filter
* Verified admin CRUD operations
* Verified Enrollment uniqueness constraint

### Project Location

The implementation for this hands-on is available in:

`PythonBackendFrameworks/python_handson_01/coursemanager`

This hands-on extends the Django project created in Hands-On 1 instead of creating a separate Django project.
