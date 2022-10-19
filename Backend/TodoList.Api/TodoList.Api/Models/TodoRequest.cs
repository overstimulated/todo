using System;
using System.ComponentModel.DataAnnotations;

namespace TodoApp.Models
{
    public record TodoRequest
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
