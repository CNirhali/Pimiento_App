document.addEventListener('DOMContentLoaded', () => {
    // Navigation Routing Logic
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');
    const pageTitle = document.getElementById('page-title');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Update page title
            const newTitle = item.querySelector('span').textContent;
            pageTitle.textContent = newTitle;
            
            // Hide all views
            viewSections.forEach(view => {
                view.classList.remove('active');
            });
            
            // Show target view
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Modal Logic Refactoring
    const modals = document.querySelectorAll('.modal-overlay');
    const closeBtns = document.querySelectorAll('.close-modal');
    
    // Specific open buttons
    const addFarmerBtn = document.getElementById('add-farmer-btn');
    const farmerModal = document.getElementById('farmer-modal');
    
    const newPaymentBtn = document.getElementById('new-payment-btn');
    const paymentModal = document.getElementById('payment-modal');
    
    if (addFarmerBtn && farmerModal) addFarmerBtn.addEventListener('click', () => farmerModal.classList.add('active'));
    if (newPaymentBtn && paymentModal) newPaymentBtn.addEventListener('click', () => paymentModal.classList.add('active'));
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modals.forEach(modal => modal.classList.remove('active'));
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    });
});
