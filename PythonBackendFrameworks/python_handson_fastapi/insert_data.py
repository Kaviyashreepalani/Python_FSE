import asyncio

from database import AsyncSessionLocal
from models import Course


async def insert_data():

    async with AsyncSessionLocal() as db:

        course1 = Course(
            name="Python Programming",
            code="CS101",
            credits=4,
            department_id=1
        )

        course2 = Course(
            name="Java Programming",
            code="CS102",
            credits=3,
            department_id=1
        )

        db.add_all([course1, course2])

        await db.commit()

        print("Data inserted successfully!")


asyncio.run(insert_data())