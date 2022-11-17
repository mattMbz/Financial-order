from django.shortcuts import render

# @login_required
def plans(request):
    return render(request, 'plans/index.html')
