public class Task
{
    private int TaskId { get; set; }
    private string Description { get; set; }
    private DateTime DueDate { get; set; }
    private bool IsCompleted { get; set; }
    public int GetTaskID() { return this.TaskId; }
    public void SetTaskID(int ID) { this.TaskId = ID; }

    public string GetDescription() { return this.Description; }
    public void SetDescription(string desc) { this.Description = desc; }

    public DateTime GetDueDate() { return this.DueDate; }
    public void SetDueDate(DateTime Date) { this.DueDate = Date; }

    public bool GetIsCompleted() { return this.IsCompleted; }
    public void SetIsCompleted(bool status) { this.IsCompleted = status; }

}