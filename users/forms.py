from django import forms

from django.contrib.auth.models import User  
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import password_validation

from django.utils.translation import gettext_lazy as _


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'password1', 'password2',)

    username = forms.CharField(
        help_text='(Required)',
        label=False,
        error_messages={'unique': _(" This username already exists!")},
        widget = forms.TextInput(
            attrs={
                "autocomplete":"off",
                'placeholder':'Your username',
                'class': 'input',
            }
        )
    )

    first_name = forms.CharField(
        help_text='(Optional)',
        label=False,
        required=False,
        widget = forms.TextInput(
            attrs={
                "autocomplete":"off",
                'placeholder':'Your first name',
                'class': 'input',
            }
        )
    )

    last_name = forms.CharField(
        help_text='(Optional)',
        label=False,
        required=False,
        widget = forms.TextInput(
            attrs={
                "autocomplete":"off",
                'placeholder':'Your last name',
                'class': 'input',
            }
        )
    )

    password1 = forms.CharField(
        label=False,
        help_text=password_validation.password_validators_help_text_html(),
        widget = forms.PasswordInput(
            attrs={
                'placeholder':'Password',
                'class': 'input ',
            }
        )
    )

    password2 = forms.CharField(
        label=False,
        help_text='(Required)',
        widget = forms.PasswordInput(
            attrs={
                'placeholder':'Confirm the password',
                'class': 'input ',
            }
        )
    )

    def save(self, commit = True):
        """Create user"""
        user = User.objects.create_user(  
            username=self.cleaned_data['username'],  
            first_name=self.cleaned_data['first_name'],  
            last_name=self.cleaned_data['last_name'],  
            password=self.cleaned_data['password1']
        )

        return user  
## End of CustomUserCreationForm


class CustomAuthenticationForm(AuthenticationForm):

    username = forms.CharField(
        widget=forms.TextInput(
            attrs={'class': 'input mb-20', "autocomplete":"off"}
        )
    )

    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={'class': 'input mb-20', "autocomplete":"off"}
        )
    )
## End of CustomAuthenticationForm