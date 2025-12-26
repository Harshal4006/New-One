//Bootstrap Form Validation Script...
(() => {
    'use strict';

    //Select Forms That Need Validation...
    const forms = document.querySelectorAll('.needs-validation');

    //Prevent Submission If Form Is Invalid...
    Array.from(forms).forEach(form => {
        form.addEventListener(
            'submit',
            event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            },
            false
        );
    });
})();
