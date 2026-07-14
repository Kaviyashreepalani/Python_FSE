import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getCourseById } from '../api/courseApi'

export const useEnrollmentStore = defineStore('enrollment', () => {

    const enrolledCourses = ref([])

    const totalCredits = computed(() => {

        return enrolledCourses.value.reduce(
            (sum, course) => sum + (course.credits || 3),
            0
        )

    })

    function enroll(course) {

        const exists = enrolledCourses.value.find(
            c => c.id === course.id
        )

        if (!exists) {

            enrolledCourses.value.push(course)

        }

    }

    function unenroll(courseId) {

        enrolledCourses.value =
            enrolledCourses.value.filter(
                c => c.id !== courseId
            )

    }

    async function fetchAndEnroll(courseId) {

        try {

            const data = await getCourseById(courseId)

            enroll({

                id: data.id,
                name: data.title,
                code: `CS30${data.id}`,
                credits: 3,
                grade: 'A'

            })

        }
        catch (error) {

            console.error(error)

        }

    }

    function $reset() {

        enrolledCourses.value = []

    }

    return {

        enrolledCourses,

        totalCredits,

        enroll,

        unenroll,

        fetchAndEnroll,

        $reset

    }

})