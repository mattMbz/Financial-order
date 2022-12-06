from django import forms

class CreateNewTableForm(forms.Form):

    name = forms.CharField(
        label='Table name:',
        max_length=15,
        widget = forms.TextInput(
            attrs = {
                "autocomplete":"off",
                'class': 'input',
                'id': 'table-name'
            }
        )
    )

    columns = forms.IntegerField(
        label='Columns:',
        widget = forms.NumberInput(
            attrs={
                "autocomplete":"off",
                'class': 'input',
                'id': 'columns',
                'min': 1,
                'max': 5
            }
        )
    )

    rows = forms.IntegerField(
        label='Rows:',
        widget = forms.NumberInput(
            attrs={
                "autocomplete":"off",
                'class': 'input',
                'id': 'rows',
                'min': 1,
                'max': 5
            }
        )
    )



class CreateAnnotationsForm(forms.Form):

    annotation = forms.CharField(
        label='',
        widget = forms.Textarea(
            attrs={
                'placeholder': 'Write something here ...',
                'class': 'mb-20',
                'id': "annotationTextarea",
                'rows':'6',
                'cols': '24'

            }
        )
    )
