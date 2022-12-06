from django.shortcuts import render
from plans.forms import CreateNewTableForm, CreateAnnotationsForm

# @login_required
def plans(request):

    context = {
        'createNewTableForm': CreateNewTableForm(),
        'createAnnotationsForm': CreateAnnotationsForm(),
    }

    return render(request, 'plans/index.html', context)
