from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect 

from users.forms import CustomUserCreationForm, CustomAuthenticationForm


def signup(request):
    if request.method == 'POST':  
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():  
            print(form.cleaned_data)
            form.save()
            user = form.cleaned_data.get('username')
            messages.success(request, 'Account for user '+ user + ' was created successfully. Now you can Login!')
            return redirect('signin')  
    else:  
        form = CustomUserCreationForm()  
    
    context = {  
        'form':form  
    }

    return render(request, 'users/signup.html', context)  
## End of signup


def index(request):
    return render(request, 'index.html')
## End of index


def signin(request):
    if request.method == 'GET':
        return render(request, 'users/signin.html', {
            'form': CustomAuthenticationForm,
        })
    else:
        user = authenticate(
            request,
            username = request.POST.get('username'),
            password = request.POST.get('password')
        )
        if user is None:
            return render( request, 'users/signin.html', {
                'form': CustomAuthenticationForm,
                'error': 'Username or password is incorrect !'
            })
        else:
            login(request, user)
            return render( request, 'users/signin.html', {})
## End of signin


@login_required
def signout(request):
    logout(request)
    return redirect('plans')
## End of signout