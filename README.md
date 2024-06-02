11257581

The View component is the most fundamental building block for creating UI layouts. It acts as a container that supports layout with flexbox, styling, touch handling, and accessibility controls. You can nest multiple View components inside each other to create complex UI structures. Use View to group UI elements together and apply common styles.


The Text component displays text content. It supports styling, nesting, and touch handling. Use it for displaying labels, headings, paragraphs, and other textual content.

The ScrollView component provides a scrollable view for content that exceeds the screen size. It works well for long lists, forms, and other scrollable content. Remember to set a bounded height for the ScrollView to ensure proper functionality.

The TextInput component allows users to input text. Customize it with properties like placeholder, multiline, maxLength, and keyboardType. Use it for login forms, search bars, and user input fields.
The StyleSheet abstraction is similar to CSS. It allows you to define styles separately from your components. By using StyleSheet.create(), you improve code quality and performance.


The Button component provides a simple way to create clickable buttons. Customize its appearance and handle button presses with onPress callbacks.

The Image component displays images. Use it for icons, avatars, and other visual elements. Provide the image source using the source prop.

Use FlatList or SectionList for rendering lists of data efficiently. FlatList is suitable for large lists, while SectionList allows grouping items into sections.

Here is a screenshot of the result


![WhatsApp Image 2024-06-02 at 21 44 36_b8840115](https://github.com/gyampson/rn-assignment3-11257581/assets/170138029/02d05bc5-d440-49c6-a94e-df6b79e22b65)
