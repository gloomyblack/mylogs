# TextField类

Material风格的文本框，

文本框使用户可以使用硬件键盘或屏幕键盘输入文本。

每当用户更改字段中的文本时，文本框就会调用onChanged回调。如果用户完成了在文本框中的输入（例如，通过按软键盘上的按钮），则文本框将调用onSubmitted回调。

要控制在文本框中显示的文本，请使用`controler`。例如，要设置文本框的初始值，请使用已经包含初始文本的`controler`。`controler`还可以控制选择和组合区域（并观察文本，选择和组合区域的变化）。

默认情况下，文本框具有`decoration`，该`decoration`在文本框下方绘制分隔线。您可以使用`decoration`属性来控制装饰，例如，添加标签或图标。如果将`decoration`属性设置为null，则装饰将被完全删除，包括装饰引入的多余padding以节省标签空间。

如果`decoration`非空（这是默认设置），则文本框要求其祖先之一是Material小部件。

要将TextField与其他FormField小部件集成到Form中，请考虑使用TextFormField。

请记住，当不再需要TextEditingController时，请进行处理。这将确保我们丢弃该对象使用的所有资源。
