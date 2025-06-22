document.getElementById('photo-upload').addEventListener('change', function(event) {
    const photo = document.getElementById('profile-photo');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photo.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
