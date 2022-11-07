**user_status.json** data is an **Array** of :
- Course




**UBC_courses.json** data is and **Array** of :
- Course

**Course** is an **Object** of :
- String "code"
- Integer "number"
- String "title"
- **Array** of **Category** "deadline_categories"

**Category** is an **Object** of :
- String "type"
- Boolean "test" (True, test; false, hw)
- **Array** of **Deadline**

**Deadline** is an **Object** of :
- String "name"
- Boolean "completed" (true, complete; false, not finished)
- **Date** "due_date"
- **Array** of **Date** reminders


