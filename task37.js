function make_shirt_default(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'Ahsan Siddique'; }
    console.log("Shirt summary: Size - ".concat(size, ", Message - ").concat(message));
}
// here the default shirt with in large size
make_shirt_default();
//here is the medium size shirt with the defaut messege i have told him the shirt size the messge is default
make_shirt_default("Medium");
// and a small shirt with a different messege
make_shirt_default('Small', 'Programming');
