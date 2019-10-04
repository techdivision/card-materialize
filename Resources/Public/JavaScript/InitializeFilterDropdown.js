(function InitFilterDropdown() {

    function initFilterDropdown() {

        this.initFilterItems = function() {
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.dropdown-trigger');
                var instances = M.Dropdown.init(elems, {coverTrigger: false, closeOnClick: false});
            });
        };

        /**
         * @method init
         * @returns {undefined}
         */
        this.displayFilterDropdown = function () {
             this.initFilterItems();
        }();
    }
    initFilterDropdown();
})();